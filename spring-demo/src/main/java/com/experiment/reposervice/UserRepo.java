package com.experiment.reposervice;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.experiment.beans.User;

@Repository
public interface UserRepo extends JpaRepository<User, Integer>{
	
}
