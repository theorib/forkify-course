import PreviewView from './previewView.js';
class SearchResultsView extends PreviewView {
  _parentELement = document.querySelector('.results');
  _errorMessage = `No recipes found for your query! Please try again ;)`;
}
export default new SearchResultsView();
