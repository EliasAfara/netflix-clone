package com.eliasafara.javaserver.repository;


import com.eliasafara.javaserver.datamodel.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
public interface UserRepository extends JpaRepository<User, Integer> {
    List<User> findByUsernameAndPassword(String userName, String password);
}
