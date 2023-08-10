package com.sulca.dev.springwebfluxapi.domain.mapper;

import com.sulca.dev.springwebfluxapi.domain.dto.AttorneyRequestDto;
import com.sulca.dev.springwebfluxapi.domain.dto.AttorneyResponseDto;
import com.sulca.dev.springwebfluxapi.domain.model.Attorney;
import lombok.AccessLevel;
import lombok.NoArgsConstructor;

@NoArgsConstructor(access = AccessLevel.PRIVATE)
public class AttorneyMapper {

    public static Attorney toModel(AttorneyRequestDto dto) {
        return new Attorney(
                dto.getName(),
                dto.getFather_last_name(),
                dto.getMother_last_name(),
                dto.getDocument_type(),
                dto.getDocument_number(),
                dto.getCellphone(),
                dto.getAddress(),
                dto.getActive(),
                dto.getBirthday(),
                dto.getType_attorney()
        );
    }

    public static Attorney toModel(Integer id, AttorneyRequestDto dto) {
        return new Attorney(
                id,
                dto.getName(),
                dto.getFather_last_name(),
                dto.getMother_last_name(),
                dto.getDocument_type(),
                dto.getDocument_number(),
                dto.getCellphone(),
                dto.getAddress(),
                dto.getActive(),
                dto.getBirthday(),
                dto.getType_attorney()
        );
    }

    public static AttorneyResponseDto toDto(Attorney model) {
        return new AttorneyResponseDto(
                model.getId(),
                model.getName(),
                model.getFather_last_name(),
                model.getMother_last_name(),
                model.getDocument_type(),
                model.getDocument_number(),
                model.getCellphone(),
                model.getAddress(),
                model.getActive(),
                model.getBirthday(),
                model.getType_attorney()
        );
    }
}
