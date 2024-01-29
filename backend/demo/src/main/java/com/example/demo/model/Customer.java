package com.example.demo.model;



import java.util.List;

import jakarta.persistence.Entity;
// import jakarta.persistence.GeneratedValue;
// import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name="Customer")
public class Customer {
    @Id
    private Integer customerId;

    private String customerName;
    private String address;

    @OneToOne
    @JoinColumn(name = "user_id")
    private User user; // One to One

    @OneToMany(mappedBy = "customer")
    private List<Payment> payments; // One to Many

}
