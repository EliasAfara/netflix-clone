package com.eliasafara.javaserver.datamodel;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "address")
public class Address {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "address_id")
    private int address_id;
    private String country;
    private String area;
    private String city;
    private String street;
    private String address_number;
    private int contact_id;

    public Address() {}

    public Address(int address_id, String country, String area, String city, String street, String address_number, int contact_id) {
        this.address_id = address_id;
        this.country = country;
        this.area = area;
        this.city = city;
        this.street = street;
        this.address_number = address_number;
        this.contact_id = contact_id;
    }

    public int getAddress_id() {
        return address_id;
    }

    public void setAddress_id(int address_id) {
        this.address_id = address_id;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getArea() {
        return area;
    }

    public void setArea(String area) {
        this.area = area;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getStreet() {
        return street;
    }

    public void setStreet(String street) {
        this.street = street;
    }

    public String getAddress_number() {
        return address_number;
    }

    public void setAddress_number(String address_number) {
        this.address_number = address_number;
    }

    public int getContact_id() {
        return contact_id;
    }

    public void setContact_id(int contact_id) {
        this.contact_id = contact_id;
    }

    @Override
    public String toString() {
        return "Address{" +
                "address_id=" + address_id +
                ", country='" + country + '\'' +
                ", area='" + area + '\'' +
                ", city='" + city + '\'' +
                ", street='" + street + '\'' +
                ", address_number='" + address_number + '\'' +
                ", contact_id=" + contact_id +
                '}';
    }
}