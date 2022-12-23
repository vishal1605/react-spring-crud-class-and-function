package com.experiment.reposervice;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.experiment.beans.User;

@Service
public class UserDao{
	
	@Autowired
	private UserRepo repo;
	
	public User saveUser(User u) {
		return repo.save(u);
		
	}
	
	public List<User> allUser(){
		return repo.findAll();
	}
	
	public User getById(int id) {
		return repo.findById(id).get();
	}
	
	public void deleteUser(int id) {
		repo.deleteById(id);
	}
	
	public User updateUser(User u) {
		return repo.save(new User(u.getId(), u.getUserName(), u.getEmail(), u.getPassword()));
	}
}

