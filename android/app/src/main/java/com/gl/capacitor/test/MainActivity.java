package com.gl.capacitor.test;

import android.os.Bundle;

import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        AppIndexingUpdateService.enqueueWork(MainActivity.this);
    }
}
