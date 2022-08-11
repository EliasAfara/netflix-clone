package com.eliasafara.javaserver.repository;

import com.eliasafara.javaserver.datamodel.Contact;
import org.springframework.data.jpa.repository.JpaRepository;
public interface ContactRepository extends JpaRepository<Contact, Integer> {

}