package com.example.backend;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Info {
    private int id;
    private String name;
    private String info;
    private String specs;
    private String year2020;
    private String year2021;
    private String img;

    public Info(String name, String info, String specs, String year2020, String year2021, String img) {
        this.name = name;
        this.info = info;
        this.specs = specs;
        this.year2020 = year2020;
        this.year2021 = year2021;
        this.img = img;
    }
}
