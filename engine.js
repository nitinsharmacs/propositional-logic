class Engine {
  static queryOn(query, knowledgeBase) {
    if (Engine.isInValidQuery(query)) throw new Error('Invalid query');

    return true;
  }

  static isInValidQuery(query) {
    return query.includes(' ') || !query.endsWith('?');
  }
}
