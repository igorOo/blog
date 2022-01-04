import {Component, ElementRef, Input, OnInit, Output, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import { find, get, pull } from 'lodash';

@Component({
    selector: 'app-tags-input',
    templateUrl: './tags-input.component.html',
    styleUrls: ['./tags-input.component.scss']
})
export class TagsInputComponent implements OnInit {
    @Input() parentForm! : FormGroup;

    // @ts-ignore
    @ViewChild('tagInput') tagInputRef: ElementRef;
    tagsView: string[] = [];
    //форма ввода тегов
    tagForm: FormGroup = new FormGroup({
        tags: new FormControl([""])
    })


    constructor(private fb: FormBuilder) { }

    ngOnInit() {
        this.parentForm.addControl("tags", new FormControl([undefined]));
    }

    focusTagInput(): void {
        this.tagInputRef.nativeElement.focus();
    }

    onKeyUp(event: KeyboardEvent): void {
        let oldValue: string = this.tagForm.controls.tags.value;
        const inputValue: string = event.key;
        if (inputValue.trim().length == 1){
            oldValue == null ? oldValue = inputValue : oldValue += inputValue;
            this.tagForm.controls.tags.setValue(oldValue)
        }
    }

    onKeyPress(event: KeyboardEvent) {
        event.preventDefault()
        event.stopPropagation()
        event.stopImmediatePropagation()
        const inputValue: string = this.tagForm.controls.tags.value;
        if (event.code === 'Backspace' && !inputValue) {
            this.removeTag();
            return;
        } else {
            if (event.code === 'Enter' || event.code === 'Space') {
                this.addTag(inputValue);
                this.tagForm.controls.tags.setValue('');
            }
        }
    }

    addTag(tag: string): void {
        if (tag[tag.length - 1] === ',' || tag[tag.length - 1] === ' ') {
            tag = tag.slice(0, -1);
        }
        if (tag.length > 0 && !find(this.tagsView, tag)) {
            this.tagsView.push(tag);
            this.parentForm.controls.tags.setValue(this.tagsView.join())
        }
    }

    removeTag(tag?: string): void {
        if (!!tag) {
            pull(this.tagsView, tag);
        } else {
            this.tagsView.splice(-1);
            this.parentForm.controls.tags.setValue(this.tagsView.join())
        }
    }

}
