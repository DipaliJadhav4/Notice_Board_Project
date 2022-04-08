package com.example.onlinenoticeboard.activity;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;

import com.example.onlinenoticeboard.R;

public class DashboardActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_dashboard);
    }



    public void onNoticeClick(View v) {
        Intent intent = new Intent(DashboardActivity.this, NoticeListActivity.class);
        startActivity(intent);
        finish();
    }



}
