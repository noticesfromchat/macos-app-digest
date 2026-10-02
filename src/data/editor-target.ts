/**
 * Where the dev-only catalog editor opens for a page of the site: the record or screen that
 * page shows. The paths are the editor's own hashes. A page the editor has no screen for
 * returns an empty string, which opens the editor at Home.
 */
const pageScreens: Record<string, string> = { explore: 'explore', about: 'about', privacy: 'privacy' };

export function editorHash(pathname: string): string {
  const [, section = '', id = ''] = pathname.replace(/\/+$/, '').split('/');
  if (!section) return '#home';
  if (section === 'apps') return id ? `#apps/${id}` : '#apps';
  if (section === 'issues') return id ? `#issues/${id}` : '#copy/archive';
  if (section === 'tags' || section === 'categories' || section === 'collections') return id ? `#${section}/${id}` : `#${section}`;
  if (section in pageScreens && !id) return `#copy/${pageScreens[section]}`;
  return '';
}
