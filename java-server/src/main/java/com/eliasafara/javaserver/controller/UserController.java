package com.eliasafara.javaserver.controller;

import com.eliasafara.javaserver.datamodel.Contact;
import com.eliasafara.javaserver.datamodel.User;
import com.eliasafara.javaserver.repository.ContactRepository;
import com.eliasafara.javaserver.repository.RoleRepository;
import com.eliasafara.javaserver.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;


@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    UserRepository userRepository;
    @Autowired
    ContactRepository contactRepository;

    @Autowired
    RoleRepository roleRepository;

    @PostMapping("/register")
    public ResponseEntity<User> registerUser(@RequestBody User req) {
        try {
            System.out.println(req.getContact());
            Contact contact = contactRepository.save(req.getContact());
            User new_user = userRepository.save(new User(
                    req.getUsername(),
                    req.getPassword(),
                    req.getRole(),
                    contact)
            );
            new_user.setPassword(null);
            return new ResponseEntity<>(new_user, HttpStatus.CREATED);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/login")
    public ResponseEntity<User> login(@RequestBody User req) {
        try {
            List<User> foundUsers = new ArrayList<>(userRepository.findByUsernameAndPassword(req.getUsername(), req.getPassword()));
            if (foundUsers.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
            User loggedInUser = new User(
                    foundUsers.get(0).getUsername(),
                    foundUsers.get(0).getRole(),
                    foundUsers.get(0).getContact()
            );
            loggedInUser.setPassword(null);
            return new ResponseEntity<>(loggedInUser, HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
