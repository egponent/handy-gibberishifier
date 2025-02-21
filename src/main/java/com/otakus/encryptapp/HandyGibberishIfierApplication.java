package com.otakus.encryptapp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@SpringBootApplication
@Controller
@RequestMapping("/")
public class HandyGibberishIfierApplication {

	public static void main(String[] args) {
		SpringApplication.run(HandyGibberishIfierApplication.class, args);
	}

	@GetMapping
	public String displayPage() {
		return "index";
	}

}
