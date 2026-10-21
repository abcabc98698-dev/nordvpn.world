// 官方邀请码一键复制交互组件
export function initInviteCopy() {
	document.addEventListener('click', async (e) => {
		const btn = e.target.closest('[data-copy-code], .invite-copy-btn');
		if (!btn) return;
		e.preventDefault();
		const code = btn.getAttribute('data-code') || 'keqgvT5Y';

		try {
			if (navigator.clipboard && window.isSecureContext) {
				await navigator.clipboard.writeText(code);
			} else {
				const textArea = document.createElement('textarea');
				textArea.value = code;
				textArea.style.position = 'fixed';
				textArea.style.opacity = '0';
				document.body.appendChild(textArea);
				textArea.select();
				document.execCommand('copy');
				document.body.removeChild(textArea);
			}

			const hint = btn.querySelector('.copy-hint');
			if (hint) {
				const originalText = hint.getAttribute('data-origin') || hint.textContent;
				hint.setAttribute('data-origin', originalText);
				hint.textContent = '已复制!';
				hint.classList.add('text-emerald-500', 'font-bold');
				setTimeout(() => {
					hint.textContent = originalText;
					hint.classList.remove('text-emerald-500', 'font-bold');
				}, 2000);
			}

			showCopyToast(`官方专属邀请码 ${code} 已复制到剪贴板！`);
		} catch (err) {
			console.error('复制失败:', err);
			prompt('请手动复制官方邀请码：', code);
		}
	});
}

function showCopyToast(message) {
	let toast = document.getElementById('global-copy-toast');
	if (!toast) {
		toast = document.createElement('div');
		toast.id = 'global-copy-toast';
		toast.className = 'fixed bottom-6 left-1/2 -translate-x-1/2 z-[999] px-4 py-2.5 rounded-xl bg-neutral-900/95 dark:bg-white text-white dark:text-neutral-900 text-xs sm:text-sm font-semibold shadow-2xl backdrop-blur-md border border-neutral-700/60 dark:border-neutral-200 flex items-center gap-2 transition-all duration-300 opacity-0 translate-y-3 pointer-events-none';
		document.body.appendChild(toast);
	}
	toast.innerHTML = `<svg class="w-4 h-4 text-emerald-400 dark:text-emerald-600 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg><span>${message}</span>`;
	toast.classList.remove('opacity-0', 'translate-y-3', 'pointer-events-none');
	toast.classList.add('opacity-100', 'translate-y-0');

	clearTimeout(window.__copyToastTimer);
	window.__copyToastTimer = setTimeout(() => {
		toast.classList.remove('opacity-100', 'translate-y-0');
		toast.classList.add('opacity-0', 'translate-y-3', 'pointer-events-none');
	}, 2500);
}
