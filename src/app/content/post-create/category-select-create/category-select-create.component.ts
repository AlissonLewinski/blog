import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Category } from 'src/app/models/category.model';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-category-select-create',
  templateUrl: './category-select-create.component.html',
  styleUrls: ['./category-select-create.component.css']
})
export class CategorySelectCreateComponent implements OnInit {

  @Input('selectedId')
  selectedId: number | null = null
  categories: Category[] =  []

  @Output()
  categorySelectedEvent = new EventEmitter<number | null>()

  creatingCategory: boolean = false
  categoryBeingCreated: Category = {
    name: ''
  }

  constructor(private categoriesService: CategoriesService) {
    this.fetchCategories()
  }

  ngOnInit(): void {
  }

  fetchCategories(): void {
    this.categoriesService.getAll().subscribe((res: any) => {
      this.categories = res.categories
    })
  }

  onCategorySelected(): void {
    this.categorySelectedEvent.emit(this.selectedId);
  }

  onSave(): void {
    this.categoriesService.create(this.categoryBeingCreated).subscribe(() => {
      this.fetchCategories()
      this.creatingCategory = false
    })
  }

}
