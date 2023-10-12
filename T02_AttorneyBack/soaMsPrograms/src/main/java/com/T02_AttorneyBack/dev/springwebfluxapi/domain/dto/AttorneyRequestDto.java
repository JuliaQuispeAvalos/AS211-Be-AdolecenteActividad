package com.sulca.dev.springwebfluxapi.domain.dto;

import lombok.Data;

import java.io.Serializable;
import java.time.LocalDate;

@Data
public class AttorneyRequestDto implements Serializable {
    private static final long serialVersionUID = 8222253670338491507L;

    private Integer id;
    private String name;
    private String father_last_name;
    private String mother_last_name;
    private String document_type;
    private String document_number;
    private String cellphone;
    private String address;
    private String active;
    private LocalDate birthday;
    private String type_attorney;
}
