package com.example.demo.controller;



import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Addon;
import com.example.demo.model.Plan;
import com.example.demo.repository.AddonRepository;
import com.example.demo.repository.PlanRepository;

@RestController
// @CrossOrigin(origins="http://localhost:5173")
@RequestMapping("/api")
public class AdminController {

    private PlanRepository planRepository; 
    private AddonRepository addonRepository;


    //Add a new plan in thee database
    @PostMapping("/plan")
    public ResponseEntity<String> addPlan(@RequestBody Plan plan) {
        try {
            Optional<Plan> existingPlan = planRepository.findById(plan.getPlanId());

            if (existingPlan.isPresent()) {
                return ResponseEntity.status(HttpStatus.CONFLICT).body("Plan with ID " + plan.getPlanId() + " already exists.");
            }

            planRepository.save(plan);

            return ResponseEntity.status(HttpStatus.CREATED).body("Plan added successfully.");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error adding the plan.");
        }
    }
    
    
    // retrieve all the plan details
    @GetMapping("/plan")
    public ResponseEntity<List<Plan>> viewPlans() {
        List<Plan> plans = planRepository.findAll();

        if (plans.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(plans, HttpStatus.OK);
        }
    }

    @PutMapping("/plan/{planId}")
    public ResponseEntity<String> editPlan(@PathVariable Long planId, @RequestBody Plan updatedPlan) {
        Optional<Plan> existingPlanOptional = planRepository.findById(planId);

        if (existingPlanOptional.isPresent()) {
            Plan existingPlan = existingPlanOptional.get();

            // Update the plan details
            existingPlan.setPlanType(updatedPlan.getPlanType());
            existingPlan.setPlanName(updatedPlan.getPlanName());
            existingPlan.setPlanValidity(updatedPlan.getPlanValidity());
            existingPlan.setPlanDetails(updatedPlan.getPlanDetails());
            existingPlan.setPlanPrice(updatedPlan.getPlanPrice());

            // Save the updated plan
            planRepository.save(existingPlan);

            return new ResponseEntity<>("Plan edited", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Plan not found", HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/plan/{planId}")
    public ResponseEntity<String> deletePlan(@PathVariable Long planId) {
        Optional<Plan> existingPlanOptional = planRepository.findById(planId);

        if (existingPlanOptional.isPresent()) {
            Plan existingPlan = existingPlanOptional.get();

            // Delete the plan
            planRepository.delete(existingPlan);

            return new ResponseEntity<>("Plan deleted", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Plan not found", HttpStatus.NOT_FOUND);
        }
    }

    //Add an addon to the plan
    @PostMapping("/addon")
    public ResponseEntity<String> createAddon(@RequestBody Addon addon) {
        try {
            
            addonRepository.save(addon);
            return new ResponseEntity<>("Addon added successfully", HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>("Failed to add addon: " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
