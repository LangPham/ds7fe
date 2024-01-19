import { ItemSearchResult } from '../../../../../shared/object-collection/shared/item-search-result.model';
import { Item } from '../../../../../core/shared/item.model';
import { createSuccessfulRemoteDataObject$ } from '../../../../../shared/remote-data.utils';
import { buildPaginatedList } from '../../../../../core/data/paginated-list.model';
import { PageInfo } from '../../../../../core/shared/page-info.model';
import { JournalSearchResultGridElementComponent } from './journal-search-result-grid-element.component';
import { getEntityGridElementTestComponent } from '../../../../../shared/object-grid/search-result-grid-element/item-search-result/item/item-search-result-grid-element.component.spec';

const mockItemWithMetadata: ItemSearchResult = new ItemSearchResult();
mockItemWithMetadata.hitHighlights = {};
mockItemWithMetadata.indexableObject = Object.assign(new Item(), {
  bundles: createSuccessfulRemoteDataObject$(
    buildPaginatedList(new PageInfo(), [])
  ),
  metadata: {
    'dc.title': [
      {
        language: 'en_US',
        value: 'This is just another title',
      },
    ],
    'creativework.editor': [
      {
        language: 'en_US',
        value: 'Smith, Donald',
      },
    ],
    'creativework.publisher': [
      {
        language: 'en_US',
        value: 'A company',
      },
    ],
    'dc.description': [
      {
        language: 'en_US',
        value: 'This is the description',
      },
    ],
  },
});

const mockItemWithoutMetadata: ItemSearchResult = new ItemSearchResult();
mockItemWithoutMetadata.hitHighlights = {};
mockItemWithoutMetadata.indexableObject = Object.assign(new Item(), {
  bundles: createSuccessfulRemoteDataObject$(
    buildPaginatedList(new PageInfo(), [])
  ),
  metadata: {
    'dc.title': [
      {
        language: 'en_US',
        value: 'This is just another title',
      },
    ],
  },
});

describe(
  'JournalSearchResultGridElementComponent',
  getEntityGridElementTestComponent(
    JournalSearchResultGridElementComponent,
    mockItemWithMetadata,
    mockItemWithoutMetadata,
    ['editor', 'publisher', 'description']
  )
);
