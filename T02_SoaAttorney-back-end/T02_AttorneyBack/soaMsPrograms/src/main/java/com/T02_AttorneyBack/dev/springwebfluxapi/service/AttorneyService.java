package com.sulca.dev.springwebfluxapi.service;

import com.sulca.dev.springwebfluxapi.domain.dto.AttorneyRequestDto;
import com.sulca.dev.springwebfluxapi.domain.dto.AttorneyResponseDto;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@Service
public interface AttorneyService {

    Mono<AttorneyResponseDto> findById(Integer id);

    Flux<AttorneyResponseDto> findAll();

    Flux<AttorneyResponseDto> findInactive();

    Mono<AttorneyResponseDto> create(AttorneyRequestDto request);

    Mono<AttorneyResponseDto> update(Integer id, AttorneyRequestDto request);

    Mono<Void> delete(Integer id);

    Mono<AttorneyResponseDto> activate(Integer id);
}
