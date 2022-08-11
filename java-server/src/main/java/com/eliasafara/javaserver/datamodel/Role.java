package com.eliasafara.javaserver.datamodel;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "role")
public class Role {
    @Id
    @Column(name = "role_name")
    private String role_name;

    public Role() {
    }

    public Role(String role_name) {
        super();
        this.role_name = role_name;
    }

    public String getRole_name() {
        return role_name;
    }

    public void setRole_name(String role_name) {
        this.role_name = role_name;
    }

    @Override
    public String toString() {
        return "Role{" +
                "role_name='" + role_name + '\'' +
                '}';
    }
}
