package com.example.backend;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class InfoController {

    private final InfoRepository infoRepository;

    @GetMapping("/names")
    public List<String> getNames(){
        return infoRepository.getTeamNames();
    }

    @GetMapping("/team")
    public List<Info> getTeamInfo(@RequestParam String name){
        return infoRepository.getTeamInfo(name);
    }
}
