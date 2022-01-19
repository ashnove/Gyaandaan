package com.gydn.gyandaan.Utility;

public class EndSessionRequest {
    private String username;
    private Long type;
    
    public EndSessionRequest() {
    }
    
    public String getUsername() {
        return username;
    }
    public void setUsername(String username) {
        this.username = username;
    }
    public Long getType() {
        return type;
    }
    public void setType(Long type) {
        this.type = type;
    }

    
}
