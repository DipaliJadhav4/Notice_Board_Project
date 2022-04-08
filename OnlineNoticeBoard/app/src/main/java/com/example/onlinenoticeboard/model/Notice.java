package com.example.onlinenoticeboard.model;

import java.io.Serializable;

public class Notice implements Serializable {

    String title;
    String description;
    int NoticeId;
    String photo;

    public Notice() {
    }

    public Notice(String title, String description, int NoticeId, String photo) {
        this.title = title;
        this.description = description;
        this.NoticeId = NoticeId;
        this.photo = photo;
    }

    public int getNoticeId() {
        return NoticeId;
    }

    public void setNoticeId(int noticeId) {
        NoticeId = noticeId;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }


    public String getPhoto() {
        return photo;
    }

    public void setPhoto(String photo) {
        this.photo = photo;
    }
}
