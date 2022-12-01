package com.gl.capacitor.test;

import android.content.Context;
import android.content.Intent;
import android.util.Log;

import androidx.annotation.NonNull;
import androidx.core.app.JobIntentService;

import com.google.firebase.appindexing.FirebaseAppIndex;

public class AppIndexingUpdateService extends JobIntentService {
    public static final int UNIQUE_JOB_ID = 42;

    public  static  void enqueueWork(Context context) {
        try {
            enqueueWork(context, AppIndexingUpdateService.class, UNIQUE_JOB_ID, new Intent());
        }catch (Exception e) {
            Log.d("Upwise", e.getLocalizedMessage());
        }
    }

    @Override
    protected void onHandleWork(@NonNull Intent intent) {
        Context ctx = getApplicationContext();
        FirebaseAppIndex index = FirebaseAppIndex.getInstance(ctx);
        AppIndexingUtil.setStickers(ctx, index);
    }
}
