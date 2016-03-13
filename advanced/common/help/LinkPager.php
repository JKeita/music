<?php
/**
 * Created by PhpStorm.
 * User: caihongling
 * Date: 2015/12/1
 * Time: 14:13
 */

namespace common\help;


use Yii;
use yii\helpers\Html;
class LinkPager extends \yii\widgets\LinkPager{

    public $pagination;//分页相关数据
    public $options = ['class' => 'u-page'];//最外围的元素的属性配置
    public $linkOptions = [];//链接的属性配置
    //样式类名
    public $linkCssClass='zpgi single';
    public $firstPageCssClass = 'first zpgi single';
    public $lastPageCssClass = 'last zpgi single';
    public $prevPageCssClass = 'zprv zbtn single';
    public $nextPageCssClass = 'znxt zbtn single';
    public $activePageCssClass = 'js-selected';
    public $disabledPageCssClass = 'js-disabled';

    public $nextPageLabel = '下一页';
    public $prevPageLabel = '上一页';
    public $maxButtonCount = 10;//最大按钮数
    public $firstPageLabel = '首页';
    public $lastPageLabel = '末页';
    public $registerLinkTags = false;
    public $hideOnSinglePage = true;
    public function run()
    {
        if ($this->registerLinkTags) {
            $this->registerLinkTags();
        }
        echo $this->renderPageButtons();
    }

    protected function renderPageButtons()
    {
        $this -> pagination -> forcePageParam = false;//不显示1页面的参数
        $pageCount = $this->pagination->getPageCount();
        if ($pageCount < 2 && $this->hideOnSinglePage) {
            return '';
        }

        $buttons = [];
        $currentPage = $this->pagination->getPage();

        // first page
        if ($this->firstPageLabel !== false) {
            $buttons[] = $this->renderPageButton($this->firstPageLabel, 0, $this->firstPageCssClass, $currentPage <= 0, false);
        }

        // prev page
        if ($this->prevPageLabel !== false) {
            if (($page = $currentPage - 1) < 0) {
                $page = 0;
            }
            $buttons[] = $this->renderPageButton($this->prevPageLabel, $page, $this->prevPageCssClass, $currentPage <= 0, false);
        }

        // internal pages
        list($beginPage, $endPage) = $this->getPageRange();
        for ($i = $beginPage; $i <= $endPage; ++$i) {
            $buttons[] = $this->renderPageButton($i + 1, $i, $this -> linkCssClass, false, $i == $currentPage);
        }

        // next page
        if ($this->nextPageLabel !== false) {
            if (($page = $currentPage + 1) >= $pageCount - 1) {
                $page = $pageCount - 1;
            }
            $buttons[] = $this->renderPageButton($this->nextPageLabel, $page, $this->nextPageCssClass, $currentPage >= $pageCount - 1, false);
        }

        // last page
        if ($this->lastPageLabel !== false) {
            $buttons[] = $this->renderPageButton($this->lastPageLabel, $pageCount - 1, $this->lastPageCssClass, $currentPage >= $pageCount - 1, false);
        }

        return Html::tag('div', implode("\n", $buttons), $this->options);
    }

    /**
     * Renders a page button.
     * You may override this method to customize the generation of page buttons.
     * @param string $label the text label for the button
     * @param integer $page the page number
     * @param string $class the CSS class for the page button.
     * @param boolean $disabled whether this page button is disabled
     * @param boolean $active whether this page button is active
     * @return string the rendering result
     */
    protected function renderPageButton($label, $page, $class, $disabled, $active)
    {
        $options = ['class' => $class === '' ? null : $class];
        if ($active) {
            Html::addCssClass($options, $this->activePageCssClass);
        }
        if ($disabled) {
            Html::addCssClass($options, $this->disabledPageCssClass);
            return Html::tag('a', $label, $options);
        }
        return Html::a($label, $this->pagination->createUrl($page), $options);
    }
} 