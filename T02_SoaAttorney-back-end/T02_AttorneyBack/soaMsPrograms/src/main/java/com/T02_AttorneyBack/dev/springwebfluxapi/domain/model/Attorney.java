package com.sulca.dev.springwebfluxapi.domain.model;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Table;

import java.time.LocalDate;

@Table
@Getter
@Setter
@NoArgsConstructor
public class Attorney {

    @Id
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
    //@Column("created_date")
    //@CreatedDate
   // private LocalDateTime createdDate = LocalDateTime.now(ZoneId.of("America/Lima"));


    public Attorney(String name, String father_last_name , String mother_last_name, String document_type, String document_number, String cellphone, String address, String active , LocalDate birthday , String type_attorney) {
        this.name = name;
        this.father_last_name = father_last_name;
        this.mother_last_name = mother_last_name;
        this.document_type = document_type;
        this.document_number = document_number;
        this.cellphone = cellphone;
        this.address = address;
        this.active = active;
        this.birthday = birthday;
        this.type_attorney = type_attorney;
    }

    public Attorney(Integer id, String name, String father_last_name , String mother_last_name, String document_type, String document_number, String cellphone, String address, String active , LocalDate birthday , String type_attorney) {
        this.id = id;
        this.name = name;
        this.father_last_name = father_last_name;
        this.mother_last_name = mother_last_name;
        this.document_type = document_type;
        this.document_number = document_number;
        this.cellphone = cellphone;
        this.address = address;
        this.active = active;
        this.birthday = birthday;
        this.type_attorney = type_attorney;
    }
}
