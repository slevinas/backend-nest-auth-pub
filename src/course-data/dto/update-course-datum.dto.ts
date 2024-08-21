import { PartialType } from '@nestjs/mapped-types';
import { CreateCourseDatumDto } from './create-course-datum.dto';

export class UpdateCourseDatumDto extends PartialType(CreateCourseDatumDto) {}
