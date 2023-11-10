![Laravel Nova Translatable Slug](https://github.com/kostamilorava/nova-translatable-slug/assets/45169743/e3255a0d-e95a-4af1-b3d7-25b122ce4d38)

<br>

# About

This package makes it possible to have a translatable slug that works with [**outl1ne/nova-translatable**](https://github.com/outl1ne/nova-translatable)

<br>

# Install
```sh
composer require kostamilorava/nova-translatable-slug
```

<br>

# Usage
```php
TranslatableSlug::make('Slug')
    ->from('title')
    ->translatable()
```

