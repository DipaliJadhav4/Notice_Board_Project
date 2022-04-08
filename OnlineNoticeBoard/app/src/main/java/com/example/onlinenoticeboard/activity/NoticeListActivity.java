package com.example.onlinenoticeboard.activity;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.support.v7.widget.GridLayoutManager;
import android.support.v7.widget.LinearLayoutManager;
import android.support.v7.widget.RecyclerView;
import android.util.Log;

import com.example.onlinenoticeboard.R;
import com.example.onlinenoticeboard.adapter.NoticeListAdapter;
import com.example.onlinenoticeboard.model.Notice;
import com.example.onlinenoticeboard.utils.Constants;
import com.example.onlinenoticeboard.utils.Utils;
import com.google.gson.JsonArray;
import com.google.gson.JsonObject;
import com.koushikdutta.async.future.FutureCallback;
import com.koushikdutta.ion.Ion;

import java.io.Serializable;
import java.util.ArrayList;

public class NoticeListActivity extends AppCompatActivity implements NoticeListAdapter.NoticeClickListener {


    ArrayList<Notice> notices = new ArrayList<>();
    RecyclerView recycleView;
    NoticeListAdapter adapter;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
       setContentView(R.layout.activity_notice_list);
       recycleView = findViewById(R.id.recycleView);

      adapter = new NoticeListAdapter(this, notices,this);
       recycleView.setAdapter(adapter);
        recycleView.setLayoutManager(new LinearLayoutManager(this));
        loadNotices();
    }


    @Override
    protected void onResume() {
        super.onResume();
        //loadNotices();
    }

    void loadNotices() {
        notices.clear();
        final String url = Utils.getUrl(Constants.PATH_NOTICE);
        Ion.with(this)
                .load(url)
                .asJsonObject()
                .setCallback(new FutureCallback<JsonObject>() {
                    @Override
                    public void onCompleted(Exception e, JsonObject result) {
                        String status = result.get("status").getAsString();
                        Log.e("mmmfjdjhf",""+result);
                        if (status.equals("success")) {
                            JsonArray tempNotices = result.get("data").getAsJsonArray();
                            for (int index = 0; index < tempNotices.size(); index++) {
                                JsonObject object = tempNotices.get(index).getAsJsonObject();

                                Notice notice = new Notice();

                                notice.setTitle(object.get("title").getAsString());
                                notice.setDescription(object.get("description").getAsString());

                                notice.setPhoto(object.get("photo").getAsString());
                                notices.add(notice);
                            }
                          adapter.notifyDataSetChanged();
                        }
                    }
                });

    }

    @Override
    public void onClick(int i) {

        Log.e("position", String.valueOf(i));
        Log.e("position","inside onClick");

        Notice notice = notices.get(i);

        Intent intent = new Intent(this,NoticeDetailActivity.class);
        intent.putExtra("details",(Serializable) notice);
        startActivity(intent);




    }


//    @Override
//    public void onClick(int i) {
//
//        Log.e("position", String.valueOf(i));
//        Log.e("position","inside onClick");
//
//        Notice notice = notices.get(i);
//
//        Intent intent = new Intent(this,NoticeDetailActivity.class);
//        intent.putExtra("detail",(Serializable) notice);
//        startActivity(intent);
//
//
//
//
//
//    }
}
