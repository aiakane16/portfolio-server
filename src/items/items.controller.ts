import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { Item } from './interfaces/item.interface';
import { ItemsService } from './items.service';

@Controller('items')
export class ItemsController {

    constructor(private readonly itemService: ItemsService) {}

    @Get()
    async findAll(): Promise<Item[]> {
        return await this.itemService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id): Promise<Item> {
        return await this.itemService.findOne(id);
    }

    @Post()
    async create(@Body() createItemDto: CreateItemDto): Promise<Item> {
        return await this.itemService.create(createItemDto);
    }

    @Put(":id")
    async update(@Param('id') id, @Body() updateItemDto: UpdateItemDto):  Promise<Item> {
        return await this.itemService.update(id,updateItemDto);
    }

    @Delete(":id")
    async delete(@Param('id') id): Promise<Item> {
        return await this.itemService.delete(id);
    }
}
