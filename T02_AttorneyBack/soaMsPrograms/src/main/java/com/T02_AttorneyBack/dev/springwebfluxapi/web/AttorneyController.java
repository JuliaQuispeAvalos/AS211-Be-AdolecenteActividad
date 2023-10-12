package com.sulca.dev.springwebfluxapi.web;

import com.sulca.dev.springwebfluxapi.domain.dto.AttorneyRequestDto;
import com.sulca.dev.springwebfluxapi.domain.dto.AttorneyResponseDto;
import com.sulca.dev.springwebfluxapi.service.AttorneyService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/v1/attorney")
@RequiredArgsConstructor
public class AttorneyController {

    private final AttorneyService attorneyService;
    @GetMapping(value="/list", produces = {MediaType.APPLICATION_JSON_VALUE, MediaType.TEXT_EVENT_STREAM_VALUE})
    public Flux<AttorneyResponseDto> findAll() {
        return this.attorneyService.findAll();
    }

    @GetMapping(value="/listI", produces = {MediaType.APPLICATION_JSON_VALUE, MediaType.TEXT_EVENT_STREAM_VALUE})
    public Flux<AttorneyResponseDto> findInactive() {
        return this.attorneyService.findInactive();
    }

    @GetMapping(value = "/find/{id}",produces = {MediaType.APPLICATION_JSON_VALUE, MediaType.TEXT_EVENT_STREAM_VALUE})
    public Mono<AttorneyResponseDto> findById(@PathVariable Integer id) {
        return this.attorneyService.findById(id);
    }

    @PutMapping(value = "/update/{id}", produces = {MediaType.APPLICATION_JSON_VALUE, MediaType.TEXT_EVENT_STREAM_VALUE})
    public Mono<AttorneyResponseDto> update(@PathVariable Integer id, @RequestBody AttorneyRequestDto dto) {
        return this.attorneyService.update(id, dto);
    }

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping(value = "/save", produces = {MediaType.APPLICATION_JSON_VALUE, MediaType.TEXT_EVENT_STREAM_VALUE})
    public Mono<AttorneyResponseDto> create(@RequestBody AttorneyRequestDto dto) {
        return this.attorneyService.create(dto);
    }

    @ResponseStatus(HttpStatus.NO_CONTENT)
    @DeleteMapping("/delete/{id}")
    public Mono<Void> delete(@PathVariable Integer id) {
        return this.attorneyService.delete(id);
    }

    @PutMapping(value = "/activate/{id}", produces = {MediaType.APPLICATION_JSON_VALUE, MediaType.TEXT_EVENT_STREAM_VALUE})
    public Mono<AttorneyResponseDto> activate(@PathVariable Integer id) {
        return this.attorneyService.activate(id);
    }

}
