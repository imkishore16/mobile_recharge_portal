package com.example.demo.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.*;

@Entity 
@Getter
@Setter
@Table(name = "Plans")
public class Plan {
    @Id
    private Long planId;

    private String planType;
    private String planName;
    private String planValidity;
    private String planDetails;
    private double planPrice;

    @OneToMany(mappedBy = "plan")
    private List<Recharge> recharges;
}