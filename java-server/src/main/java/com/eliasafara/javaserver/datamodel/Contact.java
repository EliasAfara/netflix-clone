package com.eliasafara.javaserver.datamodel;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "contacts")
public class Contact {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "contact_id")
    private int contact_id;
    private String first_name;
    private String last_name;
    private Date date_of_birth;
    private String gender;
    private String contact_email;
    private int user_id;

    public Contact() {}

    public Contact(int contact_id, String first_name, String last_name, Date date_of_birth, String gender, String contact_email, int user_id) {
        this.contact_id = contact_id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.date_of_birth = date_of_birth;
        this.gender = gender;
        this.contact_email = contact_email;
        this.user_id = user_id;
    }

    public int getContact_id() {
        return contact_id;
    }

    public void setContact_id(int contact_id) {
        this.contact_id = contact_id;
    }

    public String getFirst_name() {
        return first_name;
    }

    public void setFirst_name(String first_name) {
        this.first_name = first_name;
    }

    public String getLast_name() {
        return last_name;
    }

    public void setLast_name(String last_name) {
        this.last_name = last_name;
    }

    public Date getDate_of_birth() {
        return date_of_birth;
    }

    public void setDate_of_birth(Date date_of_birth) {
        this.date_of_birth = date_of_birth;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getContact_email() {
        return contact_email;
    }

    public void setContact_email(String contact_email) {
        this.contact_email = contact_email;
    }

    public int getUser_id() {
        return user_id;
    }

    public void setUser_id(int user_id) {
        this.user_id = user_id;
    }

    @Override
    public String toString() {
        return "Contact{" +
                "contact_id=" + contact_id +
                ", first_name='" + first_name + '\'' +
                ", last_name='" + last_name + '\'' +
                ", date_of_birth=" + date_of_birth +
                ", gender='" + gender + '\'' +
                ", contact_email='" + contact_email + '\'' +
                ", user_id=" + user_id +
                '}';
    }
}
