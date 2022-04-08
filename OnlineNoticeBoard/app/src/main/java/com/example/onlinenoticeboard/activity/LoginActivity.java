package com.example.onlinenoticeboard.activity;



import android.content.Intent;
import android.content.SharedPreferences;
import android.preference.PreferenceManager;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.EditText;
import android.widget.Toast;

import com.example.onlinenoticeboard.R;
import com.example.onlinenoticeboard.utils.Constants;
import com.example.onlinenoticeboard.utils.Utils;
import com.google.gson.JsonObject;
import com.koushikdutta.async.future.FutureCallback;
import com.koushikdutta.ion.Ion;

public class LoginActivity extends AppCompatActivity {

EditText editEmail, editPassword;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_login);

        editEmail=findViewById(R.id.editEmail);
        editPassword=findViewById(R.id.editPassword);

    }



    public void onLogin(View v) {
        String email = editEmail.getText().toString();
        String password = editPassword.getText().toString();

        if (email.length() == 0) {
            editEmail.setError("Email is mandatory");
        } else if (password.length() == 0) {
            editPassword.setError("Password is mandatory");
        } else {

//            SharedPreferences preferences =
//                    PreferenceManager.getDefaultSharedPreferences(this);
//
//            String device_token = preferences.getString("device_token", "");
            final String url = Utils.getUrl(Constants.PATH_STUDENT + "/login");

            final JsonObject body = new JsonObject();
            body.addProperty("email", email);
            body.addProperty("password", password);
//            body.addProperty("device_token", device_token);

            Ion.with(this)
                    .load("POST", url)
                    .setJsonObjectBody(body)
                    .asJsonObject()
                    .setCallback(new FutureCallback<JsonObject>() {
                        @Override
                        public void onCompleted(Exception e, JsonObject result) {
                            String status = result.get("status").getAsString();
                            if (status.equals("success")) {
                                Intent intent = new Intent(LoginActivity.this, DashboardActivity.class);
                                startActivity(intent);
                                finish();
                            } else {
                                String error = result.get("error").getAsString();
                                Toast.makeText(LoginActivity.this, error, Toast.LENGTH_SHORT).show();
                            }
                        }
                    });

        }
    }

    public void onRegister(View v) {
        Intent intent = new Intent(LoginActivity.this, RegisterActivity.class);
        startActivity(intent);
    }
}
