package com.sulca.dev.springwebfluxapi.repository;

import com.sulca.dev.springwebfluxapi.domain.model.Attorney;
import org.springframework.data.repository.reactive.ReactiveCrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AttorneyRepository extends ReactiveCrudRepository<Attorney, Integer> {
}
