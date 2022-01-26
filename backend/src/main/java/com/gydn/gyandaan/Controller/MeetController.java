package com.gydn.gyandaan.Controller;

import java.security.Key;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

import com.gydn.gyandaan.DTO.ZoomMeetingObjectDTO;
import com.gydn.gyandaan.DTO.ZoomMeetingSettingsDTO;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;

@RestController
@RequestMapping()
@CrossOrigin(origins = "*")
public class MeetController {

    Logger log = LoggerFactory.getLogger(MeetController.class);

    @GetMapping("/meeting")
    public ResponseEntity<?> createMeeting() {
       // replace zoomUserId with your user ID
       ZoomMeetingObjectDTO zoomMeetingObjectDTO = new ZoomMeetingObjectDTO();
        String apiUrl = "https://api.zoom.us/v2/users/" + "me" + "/meetings";

      // replace with your password or method
        zoomMeetingObjectDTO.setDefault_password(true);
      // replace email with your email
        // zoomMeetingObjectDTO.setHost_email("jbormon76@gmail.com");

      // Optional Settings for host and participant related options
        ZoomMeetingSettingsDTO settingsDTO = new ZoomMeetingSettingsDTO();
        settingsDTO.setJoin_before_host(false);
        settingsDTO.setParticipant_video(true);
        settingsDTO.setHost_video(false);
        settingsDTO.setAuto_recording("cloud");
        settingsDTO.setMute_upon_entry(true);

        // settingsDTO.setMeeting_invitees(Arrays.asList("ashvertex10010@gmail.com"));
        // settingsDTO.setAlternative_hosts("jborman76@gmail.com");
        // settingsDTO.setMee
        zoomMeetingObjectDTO.setType(1);
        settingsDTO.setMeeting_authentication(true);

        zoomMeetingObjectDTO.setSettings(settingsDTO);

        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders headers = new HttpHeaders();
        headers.add("Authorization", "Bearer " + generateZoomJWTTOken());
        headers.add("content-type", "application/json");
        HttpEntity<ZoomMeetingObjectDTO> httpEntity = new HttpEntity<ZoomMeetingObjectDTO>(zoomMeetingObjectDTO, headers);
        ResponseEntity<ZoomMeetingObjectDTO> zEntity = restTemplate.exchange(apiUrl, HttpMethod.POST, httpEntity, ZoomMeetingObjectDTO.class);
        if(zEntity.getStatusCodeValue() == 201) {
            log.debug("Zooom meeeting response {}",zEntity);
            Map<String, Object> meetCredentials = new HashMap<>();
            meetCredentials.put("start_url", zEntity.getBody().getStart_url());
            meetCredentials.put("join_url", zEntity.getBody().getJoin_url());
            return ResponseEntity.ok().body(meetCredentials);
        } else {
            log.debug("Error while creating zoom meeting {}", zEntity.getStatusCode());
        }
        Map<String, Object> meetCredentials = new HashMap<>();
        meetCredentials.put("start_url", zoomMeetingObjectDTO.getStart_url());
        meetCredentials.put("join_url", zoomMeetingObjectDTO.getJoin_url());
        return ResponseEntity.ok().body(meetCredentials);
    }

    private String generateZoomJWTTOken() {
        String id = UUID.randomUUID().toString().replace("-", "");
        SignatureAlgorithm signatureAlgorithm = SignatureAlgorithm.HS256;

        Date creation = new Date(System.currentTimeMillis());
        Date tokenExpiry = new Date(System.currentTimeMillis() + (1000 * 60));
        String zoomApiSecret = "AvYRo9c9cINw0Pv9A5oTZ1xmpm2Tcqa653w4";
        Key key = Keys
            .hmacShaKeyFor(zoomApiSecret.getBytes());
        return Jwts.builder()
            .setId(id)
            .setIssuer("4G_LxciNQv-sEP0nG7JmHw")
            .setIssuedAt(creation)
            .setSubject("")
            .setExpiration(tokenExpiry)
            .signWith(key, signatureAlgorithm)
            .compact();
    }

}
