package com.eliasafara.javaserver;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class})
public class JavaServerApplication {
	public static void main(String[] args) {
		SpringApplication.run(JavaServerApplication.class, args);
	}

}
