package com.eliasafara.javaserver.repository;

import com.eliasafara.javaserver.datamodel.Role;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoleRepository extends JpaRepository<Role, String> {

}