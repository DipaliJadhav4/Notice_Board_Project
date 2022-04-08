package com.example.onlinenoticeboard.activity;

import android.content.Intent;
import android.support.v7.app.ActionBar;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;

import com.example.onlinenoticeboard.R;

public class LoaderActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        ActionBar actionBar = getSupportActionBar();
        actionBar.hide();
        setContentView(R.layout.activity_main);




        new Thread(new Runnable() {
            @Override
            public void run() {
                try {

                    Thread.sleep(1800);
                    Intent intent = new Intent(LoaderActivity.this,LoginActivity.class);
                    startActivity(intent);
                    finish();

                } catch (InterruptedException e) {
                    e.printStackTrace();
                }

            }
        }).start();

    }
}
