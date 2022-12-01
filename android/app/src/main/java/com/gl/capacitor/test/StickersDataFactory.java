package com.gl.capacitor.test;

import java.util.ArrayList;
import java.util.List;

public class StickersDataFactory {
    public static List<Sticker> getAllStickerReference() {
        String[] stickerURLRef = {
                "https://firebasestorage.googleapis.com/v0/b/sticker-5cc08.appspot.com/o/sticker.png?alt=media&token=81f7a091-c367-4c19-b59c-3573a3129784",
        };

        List<Sticker> stickerList = new ArrayList<>();

        for (int i = 0; i < stickerURLRef.length; i++) {
            stickerList.add(new Sticker(stickerURLRef[i]));
        }

        return stickerList;
    }
}


