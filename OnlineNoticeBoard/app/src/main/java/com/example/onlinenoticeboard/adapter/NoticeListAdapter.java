package com.example.onlinenoticeboard.adapter;

import android.content.Context;
import android.support.annotation.NonNull;
import android.support.v7.widget.RecyclerView;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.TextView;

import com.example.onlinenoticeboard.R;
import com.example.onlinenoticeboard.model.Notice;
import com.example.onlinenoticeboard.utils.Utils;
import com.koushikdutta.ion.Ion;

import java.util.ArrayList;

public class NoticeListAdapter   extends RecyclerView.Adapter<NoticeListAdapter.ViewHolder> {

    private final Context context;
    private final ArrayList<Notice> notices;
    public NoticeClickListener listener;

    public NoticeListAdapter(Context context, ArrayList<Notice> notices,NoticeClickListener listener) {
        this.context = context;
        this.notices = notices;
        this.listener=listener;
    }

    @NonNull
    @Override
    public ViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        LayoutInflater inflater = LayoutInflater.from(context);
        return new ViewHolder(inflater.inflate(R.layout.recycler_item_notice, null));
    }

    @Override
    public void onBindViewHolder(@NonNull ViewHolder holder, final int position) {
        Notice notice = notices.get(position);

        holder.textTitle.setText(notice.getTitle());
        holder.textDescription.setText(notice.getDescription());


        String url = Utils.getUrl("/" + notice.getPhoto());
        Ion.with(context)
                .load(url)
                .withBitmap()
                .intoImageView(holder.imageView);

        holder.ll.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                listener.onClick(position);
            }
        });


    }

    @Override
    public int getItemCount() {
        return notices.size();
    }


    public interface NoticeClickListener
    {
        void onClick(int i);
    }

    public class ViewHolder extends RecyclerView.ViewHolder {

        ImageView imageView;
        TextView textTitle, textDescription;
        LinearLayout ll;

        public ViewHolder(@NonNull View itemView) {
            super(itemView);

            imageView = itemView.findViewById(R.id.imageView);
            textTitle = itemView.findViewById(R.id.textTitle);
            textDescription = itemView.findViewById(R.id.textDescription);
            ll=itemView.findViewById(R.id.ll);

        }
    }
}












