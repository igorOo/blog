import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import { find, get, pull } from 'lodash';

@Component({
    selector: 'app-tags-input',
    templateUrl: './tags-input.component.html',
    styleUrls: ['./tags-input.component.scss']
})
export class TagsInputComponent implements OnInit {

    // @ts-ignore
    @ViewChild('tagInput') tagInputRef: ElementRef;
    tags: string[] = [];
    // @ts-ignore
    form: FormGroup;

    constructor(private fb: FormBuilder) { }

    ngOnInit() {
        this.form = this.fb.group({
            tag: [undefined],
        });
    }

    focusTagInput(): void {
        this.tagInputRef.nativeElement.focus();
    }

    onKeyUp(event: KeyboardEvent): void {
        let oldValue: string = this.form.controls.tag.value;
        const inputValue: string = event.key;
        if (inputValue.trim().length == 1){
            oldValue == null ? oldValue = inputValue : oldValue += inputValue;
            this.form.controls.tag.setValue(oldValue)
        }
    }

    onKeyPress(event: KeyboardEvent) {
        event.preventDefault()
        event.stopPropagation()
        event.stopImmediatePropagation()
        const inputValue: string = this.form.controls.tag.value;
        if (event.code === 'Backspace' && !inputValue) {
            this.removeTag();
            return;
        } else {
            if (event.code === 'Enter' || event.code === 'Space') {
                this.addTag(inputValue);
                this.form.controls.tag.setValue('');
            }
        }
    }

    addTag(tag: string): void {
        if (tag[tag.length - 1] === ',' || tag[tag.length - 1] === ' ') {
            tag = tag.slice(0, -1);
        }
        if (tag.length > 0 && !find(this.tags, tag)) {
            this.tags.push(tag);
        }
    }

    removeTag(tag?: string): void {
        if (!!tag) {
            pull(this.tags, tag);
        } else {
            this.tags.splice(-1);
        }
    }

}
