import * as _ from 'lodash';
import { Component, Input, Output, EventEmitter,
         ApplicationRef, AfterContentInit } from '@angular/core';

@Component({
  selector: 'select-picker',
  templateUrl: './select-picker.component.html',
  styleUrls: ['./select-picker.component.scss']
})
export class SelectPickerComponent implements AfterContentInit {

  public items: any[] = [];
  public selectedItem: string = '';
  public hasItems: boolean = false;
  public isSearching: boolean = false;
  public search: Function;
  public labels = {
    noResults: 'Nothing found',
    placeholder: 'Search'
  };

  @Output() onSelected = new EventEmitter();
  @Input() options: any = {}; // {key: 'String', value: String}
  @Input() fetchData;
  @Input() placeholder;
  @Input() noResults;
  @Input() box = false;

  /**
   * Selectpicker constructor
   *
   */
  constructor(private _ref: ApplicationRef) {
    this.search = _.debounce(this.searchDebounced, 500);
  }

  ngAfterContentInit() {
    this.labels = this._getLabels();
  }

  onChangeSelection(item) {
    if (item && !_.isEqual(this.selectedItem, item)) {
      const selectedObject = _.find(this.items, {value: item.value});
      this.onSelected.emit({ value: selectedObject });
      this.clearSearch();
    }
  }

  searchDebounced(value = '') {
    // Fetch by external or fn source
    if (_.isFunction(this.fetchData)) {
      this.fetchData(value).subscribe(response => {
        this.items = this._setItemAttrs(response.data || response);
        this.hasItems = !!(this.items && this.items.length);
        this.isSearching = (value !== '');
      });
    // Filter array by source
    } else if (_.isArray(this.fetchData)) {
      this.items = _.filter(this.fetchData, (obj) => {
        const values = _.values(obj).join('').toLowerCase();
        return values.indexOf(value.toLowerCase()) !== -1;
      });
      this.items = this._setItemAttrs(this.items);
      this.hasItems = !!this.items.length;
      this.isSearching = (value !== '');
    } else {
      console.error('SelectpickerComponent: Invalid type of source. Allows Array|Function');
    }
  }

  clearSearch() {
    this.selectedItem = '';
    this._resetItems();
  }

  _resetItems() {
    this.items = [];
    this.hasItems = false;
    this.isSearching = false;
    this._ref.tick();
  }

  _getLabels() {
    return _.defaults({
      noResults: this.noResults,
      placeholder: this.placeholder
    }, this.labels );
  }

  _setItemAttrs(items = []) {
    if (!this.options['label'] || !this.options['value']) { return items; }

    return _.map(items, item => _.extend(item, {
      label: _.get(item, this.options['label']),
      value: _.get(item, this.options['value']),
      boxImage: _.get(item, this.options['boxImage']),
      boxTitle: _.get(item, this.options['boxTitle']),
      boxDescription: _.get(item, this.options['boxDescription'])
    }));
  }
}
