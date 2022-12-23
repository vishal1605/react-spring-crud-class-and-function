package com.experiment.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.experiment.SpringDemoApplication;
import com.experiment.beans.User;
import com.experiment.reposervice.UserDao;

@RestController
public class HomeController {
	
	@Autowired
	private UserDao dao;
	
	@CrossOrigin
	@PostMapping("/save-user")
	public User saveUser(User u){
		return dao.saveUser(u);
	}
	
	@CrossOrigin
	@GetMapping("/all-user")
	public List<User> register(){
		return dao.allUser();
	}
	
	@CrossOrigin
	@GetMapping("/delete-user/{id}")
	public String deleteUser(@PathVariable("id") int id){
		dao.deleteUser(id);
		return "Done";
	}
	
	@CrossOrigin
	@GetMapping("/get-user/{id}")
	public User getUserById(@PathVariable("id") int id){
		return dao.getById(id);
	}
	
	@CrossOrigin
	@PostMapping("/update-user")
	public User updateUser(User u){
		return dao.updateUser(u);
	}

}
