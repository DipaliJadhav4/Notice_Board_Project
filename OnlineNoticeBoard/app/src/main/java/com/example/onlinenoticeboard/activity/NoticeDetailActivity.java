package com.example.onlinenoticeboard.activity;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.ImageView;
import android.widget.TextView;

import com.example.onlinenoticeboard.R;
import com.example.onlinenoticeboard.model.Notice;
import com.example.onlinenoticeboard.utils.Constants;
import com.example.onlinenoticeboard.utils.Utils;
import com.koushikdutta.ion.Ion;

public class NoticeDetailActivity extends AppCompatActivity {

    ImageView noticeImage;
    TextView noticeTitle, noticeDescription;
    static Notice notice;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_notice_detail);


        noticeImage=findViewById(R.id.noticeImage);
        noticeTitle=findViewById(R.id.noticeTitle);
        noticeDescription=findViewById(R.id.noticeDescription);

        notice = (Notice) getIntent().getSerializableExtra("details");

       String url = Utils.getUrl("/"+notice.getPhoto());
       // Log.e("url",url);

        Ion.with(NoticeDetailActivity.this)
                .load(url)
                .withBitmap()
                .intoImageView(noticeImage);

        noticeTitle.setText(notice.getTitle());
        noticeDescription.setText(notice.getDescription());




    }




    public void onBack(View v){
        Intent intent = new Intent(this,NoticeListActivity.class);
        startActivity(intent);

    }
}
