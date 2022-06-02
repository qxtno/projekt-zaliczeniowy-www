package com.example.backend;

import lombok.RequiredArgsConstructor;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@RequiredArgsConstructor
public class InfoRepository {

    private final JdbcTemplate jdbcTemplate;

    public List<String> getTeamNames() {
        return jdbcTemplate.query("SELECT name FROM teams",
                (resultSet, rowNum) -> resultSet.getString("name"));
    }

    public List<Info> getTeamInfo(String name) {
        return jdbcTemplate.query("SELECT * FROM teams where name = '" + name + "'",
                (resultSet, rowNum) -> new Info(
                        resultSet.getString("name").replace("<br>", ""),
                        resultSet.getString("info").replace("<br>", ""),
                        resultSet.getString("specs").replace("<br>", ""),
                        resultSet.getString("2020").replace("<br>", ""),
                        resultSet.getString("2021").replace("<br>", ""),
                        resultSet.getString("img")));
    }
}
