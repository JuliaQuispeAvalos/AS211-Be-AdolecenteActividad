package com.sulca.dev.springwebfluxapi.domain.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.io.Serializable;
import java.time.LocalDate;

@Data
@AllArgsConstructor
public class AttorneyResponseDto implements Serializable {
   private static final long serialVersionUID = 8735757125749188522L;

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
