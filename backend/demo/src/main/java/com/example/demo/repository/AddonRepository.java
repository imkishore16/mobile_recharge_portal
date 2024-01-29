package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.Addon;

public interface AddonRepository extends JpaRepository<Addon, Long>{

}
