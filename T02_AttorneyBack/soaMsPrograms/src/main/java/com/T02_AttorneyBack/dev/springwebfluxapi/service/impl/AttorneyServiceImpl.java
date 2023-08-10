package com.sulca.dev.springwebfluxapi.service.impl;

import com.sulca.dev.springwebfluxapi.domain.dto.AttorneyRequestDto;
import com.sulca.dev.springwebfluxapi.domain.dto.AttorneyResponseDto;
import com.sulca.dev.springwebfluxapi.domain.mapper.AttorneyMapper;
import com.sulca.dev.springwebfluxapi.exception.ResourceNotFoundException;
import com.sulca.dev.springwebfluxapi.repository.AttorneyRepository;
import com.sulca.dev.springwebfluxapi.service.AttorneyService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import static com.sulca.dev.springwebfluxapi.domain.mapper.AttorneyMapper.toModel;

@Slf4j
@Service
@RequiredArgsConstructor
public class AttorneyServiceImpl implements AttorneyService {

    private final AttorneyRepository attorneyRepository;

    @Override
    public Mono<AttorneyResponseDto> findById(Integer id) {
        return this.attorneyRepository.findById(id)
                .map(AttorneyMapper::toDto);
    }

    @Override
    public Flux<AttorneyResponseDto> findAll() {
        return this.attorneyRepository.findAll()
                .filter(attorney -> "A".equals(attorney.getActive()))
                .map(AttorneyMapper::toDto);
    }

    @Override
    public Flux<AttorneyResponseDto> findInactive() {
        return this.attorneyRepository.findAll()
                .filter(programa -> programa.getActive().equals("I"))
                .map(AttorneyMapper::toDto);
    }

    @Override
    public Mono<AttorneyResponseDto> create(AttorneyRequestDto request) {
        return this.attorneyRepository.save(toModel(request))
                .map(AttorneyMapper::toDto);
    }

    @Override
    public Mono<AttorneyResponseDto> update(Integer id, AttorneyRequestDto request) {
        return this.attorneyRepository.findById(id)
                .switchIfEmpty(Mono.error(new ResourceNotFoundException("El id : " + id + " no fue encontrado")))
                .flatMap(programs -> this.attorneyRepository.save(toModel(programs.getId(), request)))
                .map(AttorneyMapper::toDto);
    }


    @Override
    public Mono<Void> delete(Integer id) {
        return this.attorneyRepository.findById(id)
                .switchIfEmpty(Mono.error(new ResourceNotFoundException("El id : " + id + " no fue encontrado")))
                .flatMap(programa -> {
                    programa.setActive("I");
                    return this.attorneyRepository.save(programa);
                })
                .doOnSuccess(unused -> log.info("Se elimino el programa con id: {}", id))
                .then();
    }
}
