package com.example.demo.model;


import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Entity
@Table(name ="Addons")
@Getter
@Setter
public class Addon {

    @Id
    private Long addonId;

    private String addonName;
    private double addonPrice;
    private String addonDetails;
    private String addonValidity;

    @OneToMany(mappedBy = "addon")
    private List<Recharge> recharges;
}