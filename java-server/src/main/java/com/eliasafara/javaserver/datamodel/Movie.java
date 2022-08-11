package com.eliasafara.javaserver.datamodel;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "movies")
public class Movie {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "movie_id")
    private int movie_id;
    private String movie_title;
    private Date added;
    private String mongodb_movie_id;

    public Movie() {}

    public Movie(int movie_id, String movie_title, Date added, String mongodb_movie_id) {
        this.movie_id = movie_id;
        this.movie_title = movie_title;
        this.added = added;
        this.mongodb_movie_id = mongodb_movie_id;
    }

    public int getMovie_id() {
        return movie_id;
    }

    public void setMovie_id(int movie_id) {
        this.movie_id = movie_id;
    }

    public String getMovie_title() {
        return movie_title;
    }

    public void setMovie_title(String movie_title) {
        this.movie_title = movie_title;
    }

    public Date getAdded() {
        return added;
    }

    public void setAdded(Date added) {
        this.added = added;
    }

    public String getMongodb_movie_id() {
        return mongodb_movie_id;
    }

    public void setMongodb_movie_id(String mongodb_movie_id) {
        this.mongodb_movie_id = mongodb_movie_id;
    }

    @Override
    public String toString() {
        return "Movie{" +
                "movie_id=" + movie_id +
                ", movie_title='" + movie_title + '\'' +
                ", added=" + added +
                ", mongodb_movie_id='" + mongodb_movie_id + '\'' +
                '}';
    }
}
